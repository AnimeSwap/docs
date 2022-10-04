import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/WB777.png" className={styles.featureIcon}></img>
            </div>
            <div className="text--center padding-horiz--md">
              <h2><a href={'/docs/contracts'}>{'Smart Contracts'}</a></h2>
              <p>
                Learn about the architecture of the AnimeSwap Protocol smart contracts made up of the Core and Periphery libraries.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/HR231.png" className={styles.featureIcon}></img>
            </div>
            <div className="text--center padding-horiz--md">
              <h2><a href={'/docs/sdk'}>{'SDK'}</a></h2>
              <p>
                The SDK is designed to assist developers when interacting with the protocol in any environment that can execute JavaScript.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="/img/WB001.png" className={styles.featureIcon}></img>
            </div>
            <div className="text--center padding-horiz--md">
              <h2><a href={'/blog'}>{'Blog'}</a></h2>
              <p>
                Read the latest news about the AnimeSwap Protocol and the AnimeSwap community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
