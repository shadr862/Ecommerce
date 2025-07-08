using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Acme.Ecommerce.Products
{
    public class CreateProductWithImageDto
    {
        [Required] public string Title { get; set; }
        [Required] public string Description { get; set; }
        [Required] public string Category { get; set; }
        [Required] public double Price { get; set; }
        [Required] public int Stock { get; set; }
        [Required] public int Quantity { get; set; }

        [Required] public IFormFile ThumbnailImage { get; set; }
    }
}
