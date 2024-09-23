import React from "react";
import "./PostForm.css";

function PostForm({ data }) {
  // URL da imagem padrão
  const defaultImage = "https://picsum.photos/200"; // Substitua com o URL da imagem padrão

  // Verifica se data é um objeto válido antes de acessar suas propriedades
  if (!data || typeof data !== 'object') {
    return null;
  }

  return (
    <div className="Caixa">
      <div className="DadosPostados">
        <strong>{data.titulo || 'N/A'}</strong>
        <p>{data.descricao || 'N/A'}</p>
      </div>
      <div>
        <img
          src={data.gifUrl || defaultImage} // Usa a imagem padrão se data.gifUrl estiver vazio
          alt="Post"
          style={{ width: '300px', height: 'auto' }}
        />
      </div>
    </div>
  );
}

export default PostForm;