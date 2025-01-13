import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Accelerate Development',
    Svg: require('@site/static/img/accelerate.svg').default,
    description: (
      <>
        Ocelot is designed for studying FEL and storage ring-based light sources,
        providing everything you need to kickstart your project and save time.
      </>
    ),
  },
  {
    title: 'Focus on Physics',
    Svg: require('@site/static/img/ocelot_python_logo.svg').default,
    description: (
      <>
        Written in Python, Ocelot is easy to read and modify, enabling you to develop custom modules
        with Python's vast library ecosystem.
      </>
    ),
  },
  {
    title: 'Integration with Modern Tools',
    Svg: require('@site/static/img/python_libs.svg').default,
    description: (
      <>
        Ocelot's Python implementation allows scripting beam physics simulations, building GUIs,
        and integrating ML methods for advanced research.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
