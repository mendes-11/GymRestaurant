using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Back.Services;

using DTO;
using Model;


public class ProductService : IProductService
{
    GymRestaurantContext ctx;
    ISecurityService security;
    public ProductService(GymRestaurantContext ctx, ISecurityService security)
    {
        this.ctx = ctx;
        this.security = security;
    }

    public async Task Create(ProductData product)
    {
        Produto produto = new Produto();

        produto.Nome = product.Nome;
        produto.Descricao = product.Descricao;
        produto.CodProduto = product.CodProduto;
        produto.Valor = product.Valor;
        produto.ValorPromocional = product.ValorPromocional ;


        this.ctx.Add(produto);
        await this.ctx.SaveChangesAsync();
    }
    
    public async Task<List<Produto>> Get()
        => await this.ctx.Produtos.ToListAsync();
   
    public async Task<Produto> GetByName(string name)
    {
        var query =
            from u in this.ctx.Produtos
            where u.Nome == name
            select u;
        
        return await query.FirstOrDefaultAsync();
    }

}