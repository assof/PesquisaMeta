<h1>Pesquisa de metadados</h1>
<p>Primeiro, você precisa pesquisar a meta para obter as informações necessárias para consumir a API Graph do Facebook e retornar as intenções de público. Isso permitirá que você entenda quais informações são necessárias para a sua integração com a API Graph do Facebook.</p>
<h3>Criação do token de acesso</h3>
<p>Para consumir a API Graph do Facebook, você precisará de um token de acesso. Para gerar um token de acesso para o seu aplicativo, você pode usar a ferramenta Explorer da API Graph do Facebook.</p>
<ol>
<li>Acesse a ferramenta Explorer da API Graph do Facebook em <a href="https://developers.facebook.com/tools/explorer/">https://developers.facebook.com/tools/explorer/</a>.</li>
<li>Selecione seu aplicativo no canto superior direito da tela.</li>
<li>Clique no botão "Gerar token de acesso" e siga as instruções para gerar um novo token de acesso.</li>
</ol>
<h3>Criação do token de acesso de longa duração</h3>
<p>Para ter um token de acesso que dure mais do que o padrão de 2 horas, é necessário criar um token de acesso de longa duração.</p>
<ol>
<li>Acesse a URI abaixo no seu navegador, substituindo `{APP-ID}` pelo ID do seu aplicativo no Facebook, `{APP-SECRET}` pela chave secreta do seu aplicativo e `{EXISTING-ACCESS-TOKEN}` pelo token de acesso que você acabou de gerar no Explorer:</li>
</ol>
<pre>
https://graph.facebook.com/v16.0/oauth/access_token?grant_type=fb_exchange_token&client_id={APP-ID}&client_secret={APP-SECRET}&fb_exchange_token={EXISTING-ACCESS-TOKEN}
</pre>
<ol start="2">
<li>Ao acessar a URI, você receberá um novo token de acesso de longa duração.</li>
</ol>
<h3>Renovação do token de acesso</h3>
<p>Para renovar o token de acesso de longa duração a cada 60 dias, você precisará programar um script ou uma aplicação que realize o processo de troca de tokens automaticamente.</p>
<p>Para renovar o token de acesso de longa duração, basta repetir o processo de geração de token de acesso de longa duração descrito acima. Substitua o token de acesso existente pelo novo token de acesso de longa duração gerado e salve-o em um local seguro para uso posterior.</p>
<p>Você pode programar uma tarefa cron ou outra solução de agendamento para executar automaticamente o processo de renovação do token a cada 60 dias.</p>
<h2>Conclusão</h2>
<p>Agora você sabe como gerar um token de acesso de longa duração para a API Graph do Facebook. Lembre-se de que, por motivos de segurança, é importante renovar o token de acesso regularmente.</p>
