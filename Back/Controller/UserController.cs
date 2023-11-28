using Microsoft.AspNetCore.Mvc;


namespace GymRestaurant.Controllers;

using DTO;
using Microsoft.AspNetCore.Server.IIS.Core;

[ApiController]
[Route("user")]
public class UserController : ControllerBase
{
    [HttpGet]
    public IActionResult Login(
        [FromBody] UserData user)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public IActionResult Create(
        [FromBody] UserData user)

    {
        throw new NotImplementedException();
    }

    [HttpDelete]
    public IActionResult DeleteUser()
    {
        throw new NotImplementedException();
    }

    [HttpPut("image")]
    public IActionResult AddImage()
    {
        throw new NotImplementedException();
    }
    [HttpGet("image")]
    public IActionResult GetImage()
    {
        throw new NotImplementedException();
    }

    [HttpDelete("image")]
    public IActionResult RemoveImage()
    {
        throw new NotImplementedException();
    }


}