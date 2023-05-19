let colorPicker = new iro.ColorPicker("#picker", {
    width: 320,
    color: "#f04310"
  });
  
  let slider = new iro.ColorPicker(".color-slider", {
    layout: [
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'hue',
          sliderShape: 'bar',
          sliderDirection: 'horizontal'
        }
      }
    ],
    width: 320,
    color: "#f04310"
  });
  
  colorPicker.on('color:change', async function(color) {
    let fetchColors = await fetch(`https://www.thecolorapi.com/id?hex=${color.hexString.replace('#', '')}`);
    let clrs = await fetchColors.json();
    let pElement = document.querySelector('.info-container p');
    let input = document.getElementById('hexInput');
    let infoContainer = document.querySelector('.info-container');
    input.style.backgroundColor = color.hexString;
    pElement.innerHTML = `<span>Name: ${clrs.name.value} <br>Color: ${color.hexString}</span>`;
    pElement.style.color = color.hexString;
  
    let hexColor = color.hexString;
    slider.color.hexString = hexColor;
  
    input.value = hexColor;
  
    infoContainer.style.boxShadow = `4px 4px 8px ${hexColor}`;



    const style = document.createElement('style');
    style.innerHTML = `
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background-color: transparent;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: ${hexColor}; /* Change the transparency value here */
      }
    `;
    document.head.appendChild(style);  });
  
  slider.on('color:change', function(color) {
    let hexColor = color.hexString;
    colorPicker.color.hexString = hexColor;
  });
  
  function resizeColorPicker() {
    if (window.innerHeight > 800) {
      colorPicker.resize(300);
      slider.resize(300);
    } else if (window.innerWidth <= 600) {
      colorPicker.resize(200);
      slider.resize(100);
    } else if (window.innerWidth <= 700) {
      colorPicker.resize(180);
      slider.resize(100);
    } else if (window.innerHeight < 300) {
      colorPicker.resize(100);
      slider.resize(100);
    } else if (window.innerHeight <= 400) {
      colorPicker.resize(180);
      slider.resize(100);
    } else {
      colorPicker.resize(320);
      slider.resize(200);
    }
  }
  
  window.addEventListener('load', resizeColorPicker);
  window.addEventListener('resize', resizeColorPicker);
  
  const hexInput = document.getElementById('hexInput');
  hexInput.addEventListener('input', function() {
    const hexValue = hexInput.value;
    colorPicker.color.hexString = hexValue;
  });
  
