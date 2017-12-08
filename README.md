<h1>Watson Conversation com Watson Discovery</h1>
<h3>O projeto consiste em mesclar dois serviços do <b>Watson</b> disponiveis em cloud para garantir que o bot consiga responder perguntas que não são reconhecidas pela inteligência artificial.</h3>
O Watson conversation é uma incrível ferramenta de criação de ChatBot, porém um grande problema de chatbots é o set de informações necessárias para que ele possa responder um gama maior de perguntas. Para isso, podemos incluir o Watson Discovery, que é capaz de digerir documentos e pesquisar por certas propriedades nesses documentos em forma de Query e gerando uma resposta. Um caso real de uso dessas duas tecnologias é este chatbot da hyundai: <h3> https://br-hnd-dlg.mybluemix.net/cdn/dialog.html </h3> Ele tem como objetivo responder perguntas sobre 2 modelos de carro e para isso, o discovery foi alimentado com manuais, é muito interessante ver como o site funciona. 

<h1>Passo a passo</h1>

<h3>Os primeiros passos serão relacionados a criação de conta no IBM Cloud, então se você já possui uma conta e já sabe como funciona, pode pular estes passos</h3>

<h2>Primeiro passo:</h2> Crie uma conta no IBM Cloud. Entre em www.bluemix.net e crie uma conta.
<h2>Segundo passo:</h2> Clique na parte de "catálogo". Assim que carregar, procure pela seção <b>"Watson"</b>, quando achar, clique no serviço "Watson Conversation". Deixe a página carregar e clique em "create". Clique em "Launch tool" para abrir a plataforma de criação de chatbot. Depois clique em "Log in with IBM ID". Pronto, agora você já possui um serviço de Conversation rodando, como este projeto não tem a intenção que você aprenda a usar o conversation, deixarei um tutorial muito interessante aqui sobre a ferramenta e continuarei. <h3>https://medium.com/as-m%C3%A1quinas-que-pensam/criando-chat-bots-no-facebook-com-o-ibm-watson-351df84e653d<h3> Ele é meio antigo, mas te dará uma ótima noção.
<h2>Terceiro passo:</h2>Logo após de você criar seu chatbot e configurá-lo do seu jeito, você vai precisar criar um serviço do Discovery. Repetiremos o processo de ir até o catálogo, entrar na seção de <b>"Watson"</b> mas desta vez clicaremos no Discovery. Feito isso, clique em create e em "Launch tool". O discovery pode parecer um pouco mais complexo de inicio, recomendo que você dê uma olhada na documentação e fuce um pouco no serviço. Mas basicamente, ele aceita que você dê alguns documentos a ele, logo após a inserção desses documentos, ele irá extrair metadados e permitirá que você procure informações dentro dele.
<h3>Aqui encerramos a parte de configuração de serviços Watson, podemos mexer com o código agora.</h3>
<h2>Quarto passo:</h2> Vá até seu terminal e clone nosso projeto para sua máquina (ou baixe o ZIP, como preferir). Para isso, você irá rodar o comando:<h3> git clone https://github.com/gabrueks/conversationwdiscovery.git </h3> logo após, digite cd conversationwdiscovery e pronto, já estamos na pasta do nosso projeto.
<h2>Quinto passo:</h2>Com o seu editor de texto (visual studio code / sublime / vim / etc), abra o arquivo "config.js" que está na raiz do projeto. Neste arquivo, você verá que alguns campos estão indicando para que você insira algumas usernames e passwords. Essas credenciais são dos serviços que você criou no IBM Cloud. Para obte-lôs, vamos voltar para o IBM Cloud. Acesse novamente www.bluemix.net e você se deparará com o seu "dashboard", o seu dashboard deve conter os dois serviços que você criou. <h2>5.1:</h2>Precisaremos pegar as credenciais dos dois serviços, para isso, clique em cima do Discovery, espere um pouco e clique em "Service Credencials" (no canto superior esquerdo da tela). Se não houver nenhuma credencial criada, clique em "New credential" e abra o arquivo criado logo abaixo. Você observará que terá algumas linhas de JSON contendo um USERNAME, uma PASSWORD e uma URL, aqui nós apenas vamos nos importar com o USERNAME e com a PASSWORD. Copie as credenciais e cole no arquivo config.js no diretório do nosso projeto.
<h2>5.11</h2>Tendo nossas credenciais inseridas, precisamos especificar qual será o set de documentos que usaremos. Para isso, iremos clicar em "Launch Tool" na aba de "Manage", clicaremos em alguma "Data Colletion" que estiver disponível. Depois procure por "Use this colletion in API" e clique neste texto. Uma aba será aberta informando algumas IDs. Vamos para o arquivo dentro de nosso projeto chamado "conv.js" que está dentro da pasta de routes. Você verá logo de cara dois espaços para que você possa colocar estes IDs que você encontrou, copie e cole o Environment ID e o Colletion ID dentro do nosso código e salve o arquivo.
<h2>5.2</h2>Agora que temos o discovery setado em nosso projeto, vamos fazer o mesmo com o conversation. Volte ao dashboard do seu IBM Cloud e clique em "conversation", que foi o serviço criado por você lá em cima. Clique em "Launch tool" depois "Sign in with IBM ID", depois entre em uma das suas conversações. Feito isso, abrirá nossa ferramenta de edição. No canto esquerdo, você verá uma barra preta, clique no terceiro ícone desta barra. Você deverá ver as "Deploy options", clique na segunda barra chamada de "credentials". Quando carregar, você deverá ver seu USERNAME, PASSWORD e WORKSPACE ID. Copie e cole estas informações no nosso arquivo config.js
<h2>Sexto passo:</h2> Pronto, agora temos nosso projeto quase pronto para rodar. Volte ao terminal, na pasta raiz do projeto e rode o comando: <h3>npm install</h3> Isso irá instalar todos os módulos que são necessários.
<h2>Sétimo passo:</h2> Agora sim, nosso projeto pode funcionar. Rode o comando: <h3>node app.js</h3> e ele estará funcionando no seu computador.
<h2>Oitavo e último passo:</h2>Acesse localhost:5000 e teste seu bot.

<h1>Vídeo com o passo a passo: [linkname](https://www.youtube.com/watch?v=SxFgce-WnZA&t=3s)</h1>

<h2>Qualquer dúvidas ou sugestões vocês podem enviar para gabriel.bolzi@ibm.com</h2>
