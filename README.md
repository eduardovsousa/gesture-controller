# JSExpertMax Gesture Controller - Semana JS Expert 7.0

- Para testar o projeto final → [clique aqui](https://eduardovsousa.github.io/gesture-controller/) ←

## Preview
<img width=100% src="./assets/demo-template-lg.gif">

## Pre-reqs

- Este projeto foi criado usando Node.js v19.6
- O ideal é que você rode o projeto com a versão mais recente do Chrome/Firefox.
- É necessário conceder acesso a câmera.

## Running

- Execute `npm ci` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

### FAQ
- browser-sync está lançando erros no Windows e nunca inicializa:
  - Solução: Trocar o browser-sync pelo http-server.
    1. instale o **http-server**  com `npm i -D http-server`
    2. no package.json apague todo o comando do `browser-sync` e substitua por `npx http-server .`
    3. agora o projeto vai estar executando na :8080 então vá no navegador e tente acessar o http://localhost:8080/
  A unica coisa, é que o projeto não vai reiniciar quando voce alterar algum código, vai precisar dar um F5 na página toda vez que alterar algo
- Erro no navegador de Webgl is not supported on this device
    - Digite chrome://gpu/ no Chrome para verificar se o webgl está habilitado.
    - Possíveis soluções:
      1. Opção 1: Habilitar a aceleração de hardware quando dispponível
       -  Chrome => Settings > System > Use hardware acceleration when available
       -  Firefox => Browser options > Performance > Use hardware acceleration when available
      2. Opção 2: Atualizar driver da placa de vídeo
      - Veja detalhes no [webgl-is-not-supported-on-chrome-firefox](https://www.thewindowsclub.com/webgl-is-not-supported-on-chrome-firefox)
      3. Opção 3: Trocar de WebGL para CPU (mais lento) ou Web Assembly
        - https://blog.tensorflow.org/2020/03/introducing-webassembly-backend-for-tensorflow-js.html

### Créditos
- Interface baseada no projeto [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk)
- Ao maestro [Erick Wendell](https://www.linkedin.com/in/erickwendel/) por contribuir com a comunidade Dev com esse projeto incrível.
