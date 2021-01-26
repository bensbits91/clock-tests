import * as React from 'react';
// import styles from './SharePointClocks.module.scss';
import { ISharePointClocksProps } from './ISharePointClocksProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import App from './App';

export default class SharePointClocks extends React.Component<ISharePointClocksProps, {}> {
  public render(): React.ReactElement<ISharePointClocksProps> {
    return (
      <App />
    );
  }
}
