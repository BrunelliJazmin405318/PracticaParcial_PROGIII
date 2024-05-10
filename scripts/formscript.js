$(document).ready(function() {
    
    $('#InputProfesion').change(function() {
        var ProfesSeleccionada = $(this).val();
        
        if (ProfesSeleccionada === 'medico') {
            $('#inputCampoProfesion').html('<option value="" disabled selected>Selecciona un campo de tu profesion</option><option value="cardiologo">Cardiologo</option><option value="Pediatra">Pediatra</option><option value="neurologo">Neurologo</option>');
        } else if (ProfesSeleccionada === 'docente') {
            $('#inputCampoProfesion').html('<option value="" disabled selected>Selecciona un campo de tu profesion<</option><option value="nivelInicial">Nivel Inicial</option><option value="NivelSecundario">Nivel Secundario</option><option value="NivelSecundario">Nivel Secundario</option>');
        } else if (ProfesSeleccionada === 'comerciante') {
            $('#inputCampoProfesion').html('<option value="" disabled selected>Selecciona un campo de tu profesion<</option><option value="ComercioInterior">Comercio Interior</option><option value="ComercioExterior">Comercio Exterior</option>');
        } else if (ProfesSeleccionada === 'abogado') {
            $('#inputCampoProfesion').html('<option value="" disabled selected>Selecciona un campo de tu profesion</option><option value="penal">Penal</option><option value="judicial">Judicial</option><option value="familiar">Familiar</option>');
        }
    });

$("#myForm").validate({
    rules:{
        nombre:{
            required:true,
            maxlength:20,
            minlength:2
        },
        apellido:{
            required:true,
            maxlength:20,
            minlength:4
        },
        direccion:{
            required:true,
            minlength:4
        },
        codigoPostal:{
            required:true,
        },
        profesion:{
            required:true
        },
        campoProfesion:{
            required:true
        },
        email:{
            required:true,
            email:true
        }
    },
    messages:{
        nombre:{
            required:"Ingrese el nombre",
            maxlength:"El nombre no puede tener más de 100 caracteres",
            minlength:"El nombre no puede tener menos de 2 caracteres"
        },
        apellido:{
          required:"Ingrese el apellido",
          maxlength:"El apellido no puede tener más de 50 caracteres", // Cambio carac por caracteres
          minlength:"El apellido debe tener más de 4 caracteres"
        },
        direccion:{
            required:"Ingrese la direccion",
            minlength:"La direccion no puede tener solo 2  caracteres"
        },
        codigoPostal:{
            required:"Ingrese el codigo postal"
        },
        profesion:{
            required:"Ingrese una profesion"
        },
        campoProfesion:{
            required:"ingrese un campo de la profesion"
        },
        email:{
            required:"Ingrese un email",
            email:"Email invalido"
        }
    },
    submitHandler:function(form){
        localStorage.setItem("nombre",$("#inputNombre").val())
        localStorage.setItem("apellido",$("#inputApellido").val())
        localStorage.setItem("direccion",$("#inputDireccion").val())
        localStorage.setItem("codigoPostal",$("#inputCodigoPostal").val())
        localStorage.setItem("profesion",$("#InputProfesion").val())
        localStorage.setItem("campoProfesion",$("#inputCampoProfesion").val())
        localStorage.setItem("email",$("#inputEmail").val())
        window.location.href = "div.html";
    }
   })
})