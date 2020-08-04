<<<<<<< Updated upstream:node/express-update/public/index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id='root'></div>
  <script>

    //get Hmburger;
    function uid() {

      return '_' + Math.random().toString(36).substr(2, 9);
    };
    
    function renderMenu(menu) {
      try {
        let menuStr = '';
        menu.forEach(item => {
          menuStr += `<p onclick='updatePrice("${item.ID}")'>${item.name}, Price:${item.price} NIS</p>`
        })
        document.getElementById('root').innerHTML = menuStr;
      } catch (err) {
        console.error(err);
      }
    }

    renderMenu(menu);



    function updatePrice(itemID) {
      try {
        console.log(itemID);
        //find in array;

        const index = menu.findIndex(item => item.ID === itemID);

        if (index > -1) {
          //update to zero
          menu[index].price = 0;

        }

        renderMenu(menu);
      } catch (err) {
        console.error(err)
      }
    }



  </script>
</body>

</html>
=======

   getMenu();
    function getMenu(){
        fetch('/menu')
            .then(res => res.json())
            .then(date =>{
                let items='';

                data.forEach(item =>{
                    items += `<p onclick='updatePrice("${item.ID}")'>${item.name}, Price:${item.price} NIS, Enter new name: </p>`

                })
                const root = document.getElementById('root');
                root.innerHTML = items;
            })
        }
    
    /*
    function renderMenu(menu) {
        try {
          let menuStr = '';
          menu.forEach(item => {
            menuStr += `<p onclick='updatePrice("${item.ID}")'>${item.name}, Price:${item.price} NIS, Enter new name: </p>`
          })
          document.getElementById('root').innerHTML = menuStr;
        } catch (err) {
          console.error(err);
        }
      }
  
      renderMenu(menu);
  
  
     function updatePrice(itemID) {
        try {
          console.log(itemID);
          //find in array;
  
          const index = menu.findIndex(item => item.ID === itemID);
  
          if (index > -1) {
            //update to zero
            menu[index].price = 0;
  
          }
  
          renderMenu(menu);
        } catch (err) {
          console.error(err)
        }
      }*/


  
>>>>>>> Stashed changes:node/express-update/Taima/public/function.js
