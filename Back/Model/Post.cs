using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Post
{
    public int Id { get; set; }

    public int UsuarioId { get; set; }

    public int ImagemId { get; set; }

    public virtual Imagem Imagem { get; set; } = null!;

    public virtual Usuario Usuario { get; set; } = null!;
}
