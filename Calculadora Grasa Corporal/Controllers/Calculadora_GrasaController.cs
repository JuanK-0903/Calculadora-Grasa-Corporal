using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing.Constraints;

namespace Calculadora_Grasa_Corporal.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class Calculadora_GrasaController : ControllerBase
    {
        [HttpPost]
        [Route("getGC")]
        public IActionResult getIMC(Formulario formulario)
        {
            double GC = 0;
            if (formulario.genero == 0)
                GC = (495 / (1.0324 - 0.19077 * Math.Log10(formulario.cintura - formulario.cuello) + 0.15456 * Math.Log10(formulario.altura))) - 450;
            else
                GC = (495 / (1.29579 - 0.35004 * Math.Log10(formulario.cadera + formulario.cintura - formulario.cuello) + 0.22100 * Math.Log10(formulario.altura))) - 450;

            formulario.porcentaje = (decimal?)Math.Round(GC, 1);
            return Ok(formulario);
        }

        public class Formulario
        {
            public int genero { get; set; }
            public float altura { get; set; }
            public float peso { get; set; }
            public float cintura { get; set; }
            public float cadera { get; set; }
            public float cuello { get; set; }
            public decimal? porcentaje { get; set; }
        }
    }
}
