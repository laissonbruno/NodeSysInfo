# Monitor de Uso de RAM

Este é um pequeno script em Node.js que monitora o uso de memória RAM do sistema e exibe as estatísticas em formato de tabela no console.

## Requisitos

Certifique-se de ter o Node.js instalado em seu sistema antes de executar este script.

## Como Usar

1. Clone este repositório ou copie o código para um arquivo chamado `computerRam.js`.
2. Abra o terminal na pasta onde o arquivo `computerRam.js` está localizado.
3. Execute o seguinte comando para iniciar o monitoramento:

`node computerRam.js`

4. A tabela com estatísticas de uso de RAM será exibida no console, atualizada a cada segundo.
5. Para parar o monitoramento, pressione `Ctrl + C` no terminal.

## Como Funciona

O script utiliza o módulo `os` do Node.js para obter informações sobre o sistema operacional e a memória RAM disponível. Ele calcula o uso de RAM em porcentagem e exibe as estatísticas em formato de tabela no console. O monitoramento é atualizado a cada segundo.

## Funções Principais

### `getRAMStats()`

Esta função obtém informações sobre a memória RAM e retorna um objeto contendo os seguintes detalhes:

- Sistema Operacional (`OS`)
- Arquitetura (`Arch`)
- Total de RAM (`TotalRAM`)
- RAM Livre (`FreeRAM`)
- Uso de RAM (`Usage`)

### `setInterval()`

O código utiliza a função `setInterval()` para chamar a função `getRAMStats()` a cada 1000 milissegundos (1 segundo). As estatísticas são exibidas no console em formato de tabela usando `console.table()`.

## Observações

- As unidades de medida para a memória RAM são megabytes (MB).
- Certifique-se de que o terminal suporta a função `console.table()` para exibir os resultados de forma legível.




