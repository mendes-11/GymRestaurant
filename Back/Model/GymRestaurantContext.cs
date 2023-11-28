using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Back.Model;

public partial class GymRestaurantContext : DbContext
{
    public GymRestaurantContext()
    {
    }

    public GymRestaurantContext(DbContextOptions<GymRestaurantContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Imagem> Imagems { get; set; }

    public virtual DbSet<Post> Posts { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=CT-C-001YX\\SQLEXPRESS;Initial Catalog=GymRestaurant;Integrated Security=True;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Imagem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Imagem__3214EC2760F4A9C3");

            entity.ToTable("Imagem");

            entity.Property(e => e.Id).HasColumnName("ID");
        });

        modelBuilder.Entity<Post>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Post__3214EC27BFE51383");

            entity.ToTable("Post");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ImagemId).HasColumnName("ImagemID");
            entity.Property(e => e.UsuarioId).HasColumnName("UsuarioID");

            entity.HasOne(d => d.Imagem).WithMany(p => p.Posts)
                .HasForeignKey(d => d.ImagemId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Post__ImagemID__3D5E1FD2");

            entity.HasOne(d => d.Usuario).WithMany(p => p.Posts)
                .HasForeignKey(d => d.UsuarioId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Post__UsuarioID__3C69FB99");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3214EC27A6ED6C83");

            entity.ToTable("Usuario");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Cpf)
                .HasMaxLength(11)
                .IsUnicode(false)
                .HasColumnName("CPF");
            entity.Property(e => e.Email)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.ImagemId).HasColumnName("ImagemID");
            entity.Property(e => e.Nome)
                .HasMaxLength(80)
                .IsUnicode(false);
            entity.Property(e => e.Salt)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Senha).IsUnicode(false);

            entity.HasOne(d => d.Imagem).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.ImagemId)
                .HasConstraintName("FK__Usuario__ImagemI__398D8EEE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
