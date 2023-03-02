export default class HandGestureService {
  #gestureEstimator
  #handPoseDetection
  #handsVersion
  #detector = null
  #gestureStrings
  
  constructor({ fingerposer, handPoseDetection, handsVersion, gestureStrings, knowGestures }) {
    this.#gestureEstimator = new fingerposer.GestureEstimator(knowGestures)
    this.#handPoseDetection = handPoseDetection
    this.#handsVersion = handsVersion
    this.#gestureStrings =   gestureStrings
  }

  async estimate(keypoints3D) {
    const predictions = await this.#gestureEstimator.estimate(
      this.#getLandMarksFromKeypoints(keypoints3D),
      // Porcentagem de confiança do gesto (90%)
      9
    )
    return predictions.gestures
  }

  async * detectGestures(predictions) {
    for (const hand of predictions) {
      if (!hand.keypoints3D) continue

      const gestures = await this.estimate(hand.keypoints3D)
      if (!gestures.length) continue;
      
      const result = gestures.reduce(
        ( previus, current) => (previus.score > current.score) ? previus : current
      )
      const {x, y} = hand.keypoints.find(keypoint => keypoint.name === 'index_finger_tip')
      yield { event: result.name, x, y}
      console.log('detected', this.#gestureStrings[result.name])
    }
  }

  #getLandMarksFromKeypoints(keypoints3D) {
    return keypoints3D.map(keypoint => 
      [keypoint.x, keypoint.y, keypoint.z])
  }

  async estimateHands(video) {
    return this.#detector.estimateHands(video, {
      flipHorizontal: true
    })
  }

  async initializeDector() {
    if (this.#detector) return this.#detector

    const detectorConfig = {
      runtime: 'mediapipe', // or 'tfjs',
      solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${this.#handsVersion}`,
      // O full é mais pesado e preciso, mas não necessário nessa aplicação
      modelType: 'lite',
      maxHands: 2,
    }
    this.#detector = await this.#handPoseDetection.createDetector(
      this.#handPoseDetection.SupportedModels.MediaPipeHands,
      detectorConfig
    )

    return this.#detector
  }
}