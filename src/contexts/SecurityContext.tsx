import { Dispatch } from 'redux';
import React, { Component } from 'react';
import { connect } from 'dva';
import { View, ActivityIndicator} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Users, UsersModelState } from '../models/Users';
import { AuthModelState } from '../models/Auth';
//import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes';


/*export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
    dispatch?: Dispatch;
}*/

interface SecurityLayoutProps {
    dispatch?: Dispatch;
    loading: boolean;
    currentUser: Users;
    logged: boolean;
}

export interface Loading {
    effects: { [key: string]: boolean | undefined };
    models: {
      menu?: boolean;
      setting?: boolean;
      users?: boolean;
      login?: boolean;
    };
}

interface SecurityState {
    isReady: boolean;
}

class SecurityContext extends Component<SecurityLayoutProps, SecurityState> {
    state: SecurityState = {
        isReady: false,
    };

    componentDidMount() {
        this.setState({
          isReady: true,
        });
    }

    render() {
        const { isReady } = this.state;
        const {children, loading, currentUser, logged, dispatch } = this.props;

        const isLogged = logged && currentUser !== undefined;

        if ((!isLogged && loading) || !isReady) {
            return(
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="blue" />
                </View>
            );
        }
        
        return <AppRoutes/>;
       
    }

}
export default connect(({ loggedUser, logged }: AuthModelState) => ({
    currentUser: loggedUser,
    logged: logged,
}))(SecurityContext);