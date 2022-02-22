const select = document.querySelector('select');
  const html = document.querySelector('html');
  document.body.style.padding = '10px';

  function updateBackgroundAndTextColor(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }

  select.onchange = function () {
    console.log('huidige waarde van de select / dropdown:', select.value);
    if (select.value === 'black') {
        updateBackgroundAndTextColor('black', 'white');
      } else if (select.value === 'white') {
        updateBackgroundAndTextColor('white', 'black');
      }
    // NIETS VERANDEREN AAN CODE HIERBOVEN
    // voeg hier code toe, zodat afhankelijk van de waarde, de kleur word aangepast
   if (select.value === 'purple') {
  updateBackgroundAndTextColor('purple', 'red');
} else if (select.value === 'red') {
  updateBackgroundAndTextColor('red', 'purple');
}

    // NIETS VERANDEREN AAN CODE HIERONDER
    // voeg hier code toe, zodat afhankelijk van de waarde, de kleur word aangepast
  }