// Seleciona os elementos da interface
const hOffsetInput = document.getElementById('h-offset');
const vOffsetInput = document.getElementById('v-offset');
const blurInput = document.getElementById('blur');
const spreadInput = document.getElementById('spread');
const colorInput = document.getElementById('color');
const insetInput = document.getElementById('inset');
const boxElement = document.getElementById('box');
const cssOutput = document.getElementById('css-output');

// Função para atualizar o box-shadow
function updateBoxShadow() {
  const hOffset = hOffsetInput.value;
  const vOffset = vOffsetInput.value;
  const blur = blurInput.value;
  const spread = spreadInput.value;
  const color = colorInput.value;
  const inset = insetInput.checked ? 'inset' : '';
  
  // Define o box-shadow
  const boxShadow = `${inset} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`;
  
  // Aplica o box-shadow no elemento
  boxElement.style.boxShadow = boxShadow;

  // Exibe o código CSS gerado
  cssOutput.value = `box-shadow: ${boxShadow};`;
}

// Adiciona os ouvintes de evento para os controles
hOffsetInput.addEventListener('input', updateBoxShadow);
vOffsetInput.addEventListener('input', updateBoxShadow);
blurInput.addEventListener('input', updateBoxShadow);
spreadInput.addEventListener('input', updateBoxShadow);
colorInput.addEventListener('input', updateBoxShadow);
insetInput.addEventListener('change', updateBoxShadow);

// Inicializa o box-shadow
updateBoxShadow();
