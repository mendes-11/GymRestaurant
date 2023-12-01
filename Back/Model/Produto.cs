using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Produto
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public string CodProduto { get; set; } = null!;

    public decimal Valor { get; set; }

    public decimal ValorPromocional { get; set; }

    public int? ImagemId { get; set; }

    public virtual Imagem? Imagem { get; set; }

    public virtual ICollection<PedidoProduto> PedidoProdutos { get; } = new List<PedidoProduto>();
}
