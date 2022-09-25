function calcularprecio (){

    let cantidad = document.getElementById("cantidad").value;
    let tipo = document.getElementById("tipo").value;
    let precio;
    
        switch (tipo){
          case "Estudiante": precio = cantidad * 40; break;
          case "Trainee": precio = cantidad * 100; break;
          case "Junior": precio = cantidad * 170; break;
          case "Publico general": precio = cantidad * 200; break;
        }
    
        document.getElementById ("total").innerHTML = "Total a pagar: $ " + precio;
    }

