using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Imagem
{
    public int Id { get; set; }

    public byte[] Foto { get; set; } = null!;

    public virtual ICollection<Post> Posts { get; } = new List<Post>();

    public virtual ICollection<Usuario> Usuarios { get; } = new List<Usuario>();
}
