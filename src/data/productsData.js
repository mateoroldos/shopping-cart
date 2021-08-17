import productFactory from './productFactory';

const productsData = (() => {
  const francescoli = productFactory(
    'Enzo',
    'Francescoli',
    '24/02/1995',
    'Uruguay',
    'francescoli',
    'midfielder',
    'U$S 4.000.000'
  );
  const maradona = productFactory(
    'Diego Armando',
    'Maradona',
    '24/02/1995',
    'Argentina',
    'maradona',
    'midfielder',
    'U$S 4.000.000'
  );
  const messi = productFactory('Lionel', 'Messi', '24/02/1995', 'Argentina', 'messi', 'midfielder', 'U$S 4.000.000');
  const ronaldinho = productFactory(
    '',
    'Ronaldinho',
    '24/02/1995',
    'Brazil',
    'ronaldinho',
    'midfielder',
    'U$S 4.000.000'
  );
  const gonzalez = productFactory(
    'Tata',
    'Gonzalez',
    '24/02/1995',
    'Uruguay',
    'gonzalez',
    'midfielder',
    'U$S 4.000.000'
  );
  const beckenbauer = productFactory(
    'Franz',
    'Beckenbauer',
    '24/02/1995',
    'Germany',
    'beckenbauer',
    'midfielder',
    'U$S 4.000.000'
  );
  const cruyff = productFactory('Johan', 'Cruyff', '24/02/1995', 'Holland', 'cruyff', 'midfielder', 'U$S 4.000.000');
  const maldini = productFactory('Paolo', 'Maldini', '24/02/1995', 'Italy', 'maldini', 'midfielder', 'U$S 4.000.000');
  const suarez = productFactory('Luis', 'Suarez', '24/02/1995', 'Uruguay', 'suarez', 'midfielder', 'U$S 4.000.000');
  const pele = productFactory('', 'Pele', '24/02/1995', 'Brazil', 'pele', 'midfielder', 'U$S 4.000.000');
  const platini = productFactory('Michel', 'Platini', '24/02/1995', 'France', 'platini', 'midfielder', 'U$S 4.000.000');
  const puyol = productFactory('Carles', 'Puyol', '24/02/1995', 'Spain', 'puyol', 'midfielder', 'U$S 4.000.000');
  const ronaldo = productFactory('', 'Ronaldo', '24/02/1995', 'Brazil', 'ronaldo', 'midfielder', 'U$S 4.000.000');
  const zidane = productFactory('Zidanine', 'Zidane', '24/02/1995', 'France', 'zidane', 'midfielder', 'U$S 4.000.000');
  const cristiano = productFactory(
    'Cristiano',
    'Ronaldo',
    '24/02/1995',
    'Protugal',
    'cristiano',
    'midfielder',
    'U$S 4.000.000'
  );

  const productsArray = [
    francescoli,
    maradona,
    messi,
    ronaldinho,
    suarez,
    gonzalez,
    beckenbauer,
    cruyff,
    maldini,
    pele,
    platini,
    puyol,
    ronaldo,
    zidane,
    cristiano,
  ];

  return {
    productsArray,
  };
})();

export default productsData;
