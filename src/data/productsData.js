import productFactory from './productFactory';

const productsData = (() => {
  const francescoli = productFactory(
    0,
    'Enzo',
    'Francescoli',
    '24/02/1995',
    'Uruguay',
    'francescoli',
    'midfielder',
    'U$S 4.000.000'
  );
  const maradona = productFactory(
    1,
    'Diego Armando',
    'Maradona',
    '24/02/1995',
    'Argentina',
    'maradona',
    'midfielder',
    'U$S 4.000.000'
  );
  const messi = productFactory(2, 'Lionel', 'Messi', '24/02/1995', 'Argentina', 'messi', 'midfielder', 'U$S 4.000.000');
  const ronaldinho = productFactory(
    3,
    '',
    'Ronaldinho',
    '24/02/1995',
    'Brazil',
    'ronaldinho',
    'midfielder',
    'U$S 4.000.000'
  );
  const gonzalez = productFactory(
    4,
    'Tata',
    'Gonzalez',
    '24/02/1995',
    'Uruguay',
    'gonzalez',
    'midfielder',
    'U$S 4.000.000'
  );
  const beckenbauer = productFactory(
    5,
    'Franz',
    'Beckenbauer',
    '24/02/1995',
    'Germany',
    'beckenbauer',
    'midfielder',
    'U$S 4.000.000'
  );
  const cruyff = productFactory(6, 'Johan', 'Cruyff', '24/02/1995', 'Holland', 'cruyff', 'midfielder', 'U$S 4.000.000');
  const maldini = productFactory(
    7,
    'Paolo',
    'Maldini',
    '24/02/1995',
    'Italy',
    'maldini',
    'midfielder',
    'U$S 4.000.000'
  );
  const suarez = productFactory(8, 'Luis', 'Suarez', '24/02/1995', 'Uruguay', 'suarez', 'midfielder', 'U$S 4.000.000');
  const pele = productFactory(9, '', 'Pele', '24/02/1995', 'Brazil', 'pele', 'midfielder', 'U$S 4.000.000');
  const platini = productFactory(
    10,
    'Michel',
    'Platini',
    '24/02/1995',
    'France',
    'platini',
    'midfielder',
    'U$S 4.000.000'
  );
  const puyol = productFactory(11, 'Carles', 'Puyol', '24/02/1995', 'Spain', 'puyol', 'midfielder', 'U$S 4.000.000');
  const ronaldo = productFactory(12, '', 'Ronaldo', '24/02/1995', 'Brazil', 'ronaldo', 'midfielder', 'U$S 4.000.000');
  const zidane = productFactory(
    13,
    'Zidanine',
    'Zidane',
    '24/02/1995',
    'France',
    'zidane',
    'midfielder',
    'U$S 4.000.000'
  );
  const cristiano = productFactory(
    14,
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
