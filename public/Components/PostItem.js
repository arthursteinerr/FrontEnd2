import React, { useState } from "react";
import "./PostItem.css";
import PostForm from "./PostForm"; // Certifique-se de que o caminho esteja correto

function PostItem() {
  // Inicializa o estado do formulário
  const [formData, setFormData] = useState({
    titulo: 'Título bem Surreal...',
    descricao: 'Sua História surreal...',
    gifUrl: 'Insira uma GIF!',
  });

  // Inicializa o estado para armazenar as postagens
  const [postagens, setPostagens] = useState([]);

  // Função que lida com a mudança de qualquer campo de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Função que limpa os campos quando o campo recebe foco
  const handleFocus = (field) => {
    if (field === 'titulo' && formData.titulo === 'título bem Surreal...') {
      setFormData((prevFormData) => ({...prevFormData, titulo: '',  }));
    }
    if (field === 'descricao' && formData.descricao === 'Sua História surreal...') {
      setFormData((prevFormData) => ({
        ...prevFormData, descricao: '', }));
    }
    if (field === 'gifUrl' && formData.gifUrl === 'Insira uma GIf') {
      setFormData((prevFormData) => ({...prevFormData, gifUrl: '', }));
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    // Adiciona a nova postagem ao estado de postagens
    setPostagens((prevPostagens) => [...prevPostagens, formData]);

    // Limpa o formulário após o envio
    setFormData({
      titulo: 'título bem Surreal...',
      descricao: 'Sua História surreal...',
      gifUrl: 'Insira uma GIf',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            onFocus={() => handleFocus('titulo')}
            required
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            rows="10"
            cols="30"
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            onFocus={() => handleFocus('descricao')}
            required
          />
        </div>
        <div>
          <label htmlFor="gifUrl">URL do GIF:</label>
          <input
            type="text"
            id="gifUrl"
            name="gifUrl"
            value={formData.gifUrl}
            onChange={handleChange}
            onFocus={() => handleFocus('gifUrl')}
            placeholder="Insira o URL do GIF aqui"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {/* Exibe todas as postagens */}
      {postagens.map((post, index) => (<PostForm key={index} data={post} />
      ))}
    </div>
  );
}

export default PostItem;