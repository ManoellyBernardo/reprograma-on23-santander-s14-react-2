import Image from './Image';
import Subtitle from './Subtitle';
import Text from './Text';

import fotoManu from '../assets/foto-manu.jpeg';

function Bio() {
  return (
    <section>
      <Image image={fotoManu} textAlt='foto da autora desta página, a Manu' />
      <Subtitle content='Prazer, Manoelly, mais conhecida como Manu 😉' />
      <Text content='Sou graduanda em Análise e Desenvolvimento de Sistemas e aluna {reprograma} do curso de front end.' />
    </section>
  );
}

export default Bio;