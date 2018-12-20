const $root = document.querySelector('#app')

function h1(styles,...values) {
    // console.log(values)
    const $h1 = document.createElement('h1')
    $h1.style = styles.toString().replace(/,/,'')
   // $h1.innerHTML = `${content}<br>  ${content2} <br> ${content3}`
      $h1.innerHTML = values.toString().replace(/,/g,"<br>")
    return $h1
}

const content = `Tagged Template`

const title = h1`
    ${'Lifestyle'}
    font-size:40px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color:purple;
    text-align: center;
    ${"Vue js"}
    ${"Reactjs"}
    ${"Javascript"}
    `

$root.insertBefore(title, null)