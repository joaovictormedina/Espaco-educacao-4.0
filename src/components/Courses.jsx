import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import criativosImg from '../assets/img/criativos.png';
import aprendizadosImg from '../assets/img/aprendizados.png';
import tecnologiaImg from '../assets/img/tecnologia.png';
import feriasImg from '../assets/img/ferias.png';
import '../style.css';

const Courses = () => {
  return (
    <section className="courses-section">
      <h2>Nossos Cursos</h2>
      <div className="courses-container">
        <div className="course">
          <img src={criativosImg} alt="Curso 1" />
          <h3>Cursos Criativos</h3>
          <p>Desperte seu talento artístico com nossos cursos de pintura em tela, desenho e aquarela! Explore sua criatividade e aprenda técnicas únicas para expressar suas ideias de forma vibrante. Transforme sua paixão em arte e comece a criar hoje mesmo!</p>
          <ul className="course-list-one">
            <li>Pintura de Aquarela</li>
            <li>Desenho Artístico</li>
            <li>Pintura em tela</li>
            <li>Pintura Artística</li>
            <li>Pintura em tecido</li>
          </ul>
          <a href="https://wa.me/5521997328496?text=Olá, gostaria de saber mais sobre os cursos criativos!" className="learn-more-button" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
        </div>
        <div className="course">
          <img src={aprendizadosImg} alt="Curso 2" />
          <h3>Cursos de Aprendizados</h3>
          <p>Aperfeiçoe suas habilidades e conquiste novas oportunidades com nossos cursos de formações continuadas e preparação para concursos! Aprenda com os melhores e esteja pronto para o mercado de trabalho e desafios acadêmicos. Invista no seu futuro hoje!</p>
          <ul className="course-list-two">
            <li>Concurso 4.0</li>
            <li>Recreação 4.0</li>
          </ul>
          <a href="https://wa.me/5521997328496?text=Olá, gostaria de saber mais sobre os cursos de aprendizados!" className="learn-more-button" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
        </div>
        <div className="course">
          <img src={tecnologiaImg} alt="Curso 3" />
          <h3>Cursos de Tecnologia</h3>
          <p>Impulsione sua carreira com nossos cursos de tecnologia! Aprenda programação, desenvolvimento web e ciência de dados com especialistas do setor. Inscreva-se e transforme sua paixão em profissão!</p>
          <ul className="course-list-three">
            <li>HTML/CSS: Criação de páginas WEB - Iniciante</li>
            <li>Linguagem de Programação Python - Iniciante</li>
            <li>HTML/JavaScript - Avançado</li>
          </ul>
          <a href="https://wa.me/5521997328496?text=Olá, gostaria de saber mais sobre os cursos de tecnologia!" className="learn-more-button" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
        </div>
        <div className="course">
          <img src={feriasImg} alt="Curso 4" />
          <h3>Férias Escolares</h3>
          <p>Garanta um verão inesquecível para seu filho com nossos cursos de férias! Oferecemos atividades divertidas e educativas que estimulam a criatividade, o aprendizado e a socialização. Inscreva seu pequeno agora e proporcione a ele uma experiência incrível cheia de novas amizades e descobertas!</p>
          <ul className="course-list-four">
            <li>10ª Colônia de Férias/2025</li>
            <li>Day Art nas Férias</li>
          </ul>
          <a href="https://wa.me/5521997328496?text=Olá, gostaria de saber mais sobre as atividades de Férias para crianças!" className="learn-more-button" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
