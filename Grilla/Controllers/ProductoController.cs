using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;

namespace Grilla.Controllers
{
    public class ProductoController : Controller
    {
        public ActionResult Lista()
        {
            return View();
        }

        public string listar()
        {
            string rpta = "";
            daSQL odaSQL = new daSQL("conNW");
            rpta = odaSQL.executeCommand("uspProductoListarCsv");
            return rpta;
        }
    }
}