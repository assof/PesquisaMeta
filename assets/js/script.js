function newApi(format) {
                return ExcellentExport.convert({
                    anchor: 'anchorNewApi-' + format,
                    filename: 'pesquisa',
                    format: format
                }, [{
                    name: 'Sheet Name Here 1',
                    from: {
                        table: 'table'
                    }
                }]);
            }





$('#limpar').click(function(event) {
	$('#table').html("");
	$('#encontrados').html("");
	$('#limpar').css('display', 'none');
	$('#pesquisa').val("");
	$('#pesquisa').prop( "disabled", false );


$('#anchorNewApi-xlsx').addClass('d-none');

});


$('#pesquisar').click(function(){

	var pesquisa = $('#pesquisa').val();
	var token = 'EAAoF7xuZBZBmUBAEgb91083lVhyDaZAj10NQqGJkb9706cQp4iy306Nx0GzQ6llRSOjRCwemzbeTQrAr4kQsWO8JIfNGYfHEKmz9YDw4yt6oYOBCPZCluKX7b8kfy7r6WfNVfwsLymNTRAaTXgmdqpVae0uTe701kSpp7A4ymnpxA9H7j7s2aK49xeejrdYZD';

if (pesquisa != "") {
	

	$('#pesquisa').prop( "disabled", true );

$('#limpar').css('display', 'flex');
$('#anchorNewApi-xlsx').removeClass('d-none');


$('#loader').removeClass('d-none');


	$.get( "https://graph.facebook.com/search?q="+pesquisa+"&type=adinterest&limit=10000&locale=pt_BR&access_token="+token, function(data) {
$('#encontrados').text('Foram encontrados '+data.data.length+' registros');
		



		for(linha=0; linha < data.data.length; linha++)
		{
			console.log('Registros da linha ' + linha);
			// console.log(data.data[linha]);
		var nome = data.data[linha].name;
		var id = data.data[linha].id;
		var audience_size = data.data[linha].audience_size;
		var description =data.data[linha].description;
		var topic = data.data[linha].topic;


var tabela = "";
tabela += "<tr>"
tabela += '<td>'+id+'</td>'
tabela += '<td>'+nome+'</td>'
tabela += '<td>'+audience_size+'</td>'
tabela += '<td>'+description+'</td>'
tabela += '<td>'+topic+'</td>'
tabela += '<td>'

for(i=0; i < data.data[linha].path.length; i++)
		{ 		
		tabela += data.data[linha].path[i]+'<br>';
}
tabela += '</td>'			
tabela += '<tr>'

$('#table').append(tabela);
			
var total = data.data.length-1;

console.log(linha);
console.log(total);


if (linha == total) {

	$('#loader').addClass('d-none');
}


		}		
	});

}


});