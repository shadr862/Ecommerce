using System;
using System.Threading.Tasks;
using Acme.Ecommerce.Products.Acme.Ecommerce.Products;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using System.Linq;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace Acme.Ecommerce.Products
{
    public class ProductAppService : CrudAppService<
        Product, ProductDto, Guid, ProductListRequestDto,
        CreateUpdateProductDto, CreateUpdateProductDto>, IProductAppService
    {
        private readonly IRepository<Product, Guid> _repository;
        public ProductAppService(IRepository<Product, Guid> repository) : base(repository)
        {
            _repository = repository;
        }
        public async Task<ProductDto> CreateWithImageAsync([FromForm] CreateProductWithImageDto input)
        {
            var product = new Product
            {
                Title = input.Title,
                Description = input.Description,
                Category = input.Category,
                Price = input.Price,
                Stock = input.Stock,
                Quantity = input.Quantity
            };

            // Save image to wwwroot/product-images  
            if (input.ThumbnailImage != null && input.ThumbnailImage.Length > 0)
            {
                var fileName = $"{Guid.NewGuid()}{Path.GetExtension(input.ThumbnailImage.FileName)}";
                var imagePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "product-images", fileName);

                Directory.CreateDirectory(Path.GetDirectoryName(imagePath)!); // Ensure folder exists  

                using (var stream = new FileStream(imagePath, FileMode.Create))
                {
                    await input.ThumbnailImage.CopyToAsync(stream);
                }

                product.Thumbnail = $"/product-images/{fileName}"; // Relative path for frontend use  
            }

            await _repository.InsertAsync(product);
            return ObjectMapper.Map<Product, ProductDto>(product);
        }

        public async Task<List<ProductDto>> GetBeautyProduct()
        {
            var productQueryable = await _repository.GetQueryableAsync();
            var query = from product in productQueryable
                        where product.Category == "beauty"
                        select new ProductDto
                        {
                            Id = product.Id,
                            Title = product.Title,
                            Description = product.Description,
                            Category = product.Category,
                            Price = product.Price,
                            Stock = product.Stock,
                            Quantity = product.Quantity,
                            Thumbnail = product.Thumbnail
                        };
            return await AsyncExecuter.ToListAsync(query);

        }
        public async Task<List<ProductDto>> GetFragrancesProduct()
        {
            var productQueryable = await _repository.GetQueryableAsync();
            var query = from product in productQueryable
                        where product.Category == "fragrances"
                        select new ProductDto
                        {
                            Id = product.Id,
                            Title = product.Title,
                            Description = product.Description,
                            Category = product.Category,
                            Price = product.Price,
                            Stock = product.Stock,
                            Quantity = product.Quantity,
                            Thumbnail = product.Thumbnail
                        };
            return await AsyncExecuter.ToListAsync(query);

        }

        public async Task<List<ProductDto>> GetFurnitureProduct()
        {
            var productQueryable = await _repository.GetQueryableAsync();
            var query = from product in productQueryable
                        where product.Category == "furniture"
                        select new ProductDto
                        {
                            Id = product.Id,
                            Title = product.Title,
                            Description = product.Description,
                            Category = product.Category,
                            Price = product.Price,
                            Stock = product.Stock,
                            Quantity = product.Quantity,
                            Thumbnail = product.Thumbnail
                        };
            return await AsyncExecuter.ToListAsync(query);

        }
        public async Task<List<ProductDto>> GetGroceriesProduct()
        {
            var productQueryable = await _repository.GetQueryableAsync();
            var query = from product in productQueryable
                        where product.Category == "groceries"
                        select new ProductDto
                        {
                            Id = product.Id,
                            Title = product.Title,
                            Description = product.Description,
                            Category = product.Category,
                            Price = product.Price,
                            Stock = product.Stock,
                            Quantity = product.Quantity,
                            Thumbnail = product.Thumbnail
                        };
            return await AsyncExecuter.ToListAsync(query);

        }

        public async Task<List<ProductDto>> GetClothingProduct()
        {
            var queryable = await _repository.GetQueryableAsync();

            var filtered = queryable
                .Where(p => p.Category == "men's clothing" || p.Category == "women's clothing")
                .Select(product => new ProductDto
                {
                    Id = product.Id,
                    Title = product.Title,
                    Description = product.Description,
                    Category = product.Category,
                    Price = product.Price,
                    Stock = product.Stock,
                    Quantity = product.Quantity,
                    Thumbnail = product.Thumbnail
                });

            return await AsyncExecuter.ToListAsync(filtered); // no Take, load all matching
        }




        public async Task<List<ProductDto>> GetElectronicsAndJeweleryProduct()
        {
            var productQueryable = await _repository.GetQueryableAsync();
            var query = from product in productQueryable
                        where product.Category == "jewelery" | product.Category == "electronics"
                        select new ProductDto
                        {
                            Id = product.Id,
                            Title = product.Title,
                            Description = product.Description,
                            Category = product.Category,
                            Price = product.Price,
                            Stock = product.Stock,
                            Quantity = product.Quantity,
                            Thumbnail = product.Thumbnail
                        };
            return await AsyncExecuter.ToListAsync(query);

        }

        

       
    }
}

