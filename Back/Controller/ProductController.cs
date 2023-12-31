using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Back.Controllers;

using DTO;
using Model;
using Back.Services;
using System.Security.Cryptography;
using Trevisharp.Security.Jwt;
using System.ComponentModel;

[ApiController]
[Route("product")]
public class ProductController : ControllerBase
{
 [HttpPost("register")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Create(
        [FromBody] ProductData product,
        [FromServices] IProductService service)
    {

        var errors = new List<string>();
        if (product is null)
            errors.Add("É necessário informar um Nome.");

        if (errors.Count > 0)
            return BadRequest(errors);

        await service.Create(product);
        return Ok();
    }

    [HttpGet("")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Get(
        [FromServices] IProductService service)
    {
        var a = await service.Get();
        var errors = new List<string>();

        if (errors.Count > 0)
            return BadRequest(errors);

        return Ok(new { a });
    }

    [HttpDelete]
    [EnableCors("DefaultPolicy")]
    public IActionResult DeleteUser()
    {
        throw new NotImplementedException();
    }

    [HttpGet("image")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> GetImage(
        int photoId,
        [FromServices] ISecurityService security,
        [FromServices] GymRestaurantContext ctx)
    {
        var query =
            from image in ctx.Imagems
            where image.Id == photoId
            select image;

        var photo = await query.FirstOrDefaultAsync();
        if (photo is null)
            return NotFound();

        return File(photo.Foto, "image/jpeg");
    }

    [DisableRequestSizeLimit]
    [HttpPut("image")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> AddImage(
        [FromServices] ISecurityService security
    )
    {
        var jwtData = Request.Form["jwt"];
        var jwtObj = JsonSerializer
            .Deserialize<JwtToken>(jwtData);
        var jwt = jwtObj.jwt;

        var userOjb = await security
            .ValidateJwt<JwtPayload>(jwt);
        if (userOjb is null)
            return Unauthorized();
        var userId = userOjb.id;

        var files = Request.Form.Files;
        if (files is null || files.Count == 0)
            return BadRequest();

        var file = Request.Form.Files[0];
        if (file.Length < 1)
            return BadRequest();

        using MemoryStream ms = new MemoryStream();
        await file.CopyToAsync(ms);
        var data = ms.GetBuffer();

        Imagem img = new Imagem();
        img.Foto = data;

        GymRestaurantContext ctx = new GymRestaurantContext();
        ctx.Add(img);
        await ctx.SaveChangesAsync();

        var query =
            from user in ctx.Usuarios
            where user.Id == userId
            select user;
        var loggedUser = query.FirstOrDefault();
        loggedUser.ImagemId = img.Id;

        await ctx.SaveChangesAsync();

        return Ok();
    }

    [HttpDelete("image")]
    [EnableCors("DefaultPolicy")]
    public IActionResult RemoveImage()
    {
        throw new NotImplementedException();
    }
}