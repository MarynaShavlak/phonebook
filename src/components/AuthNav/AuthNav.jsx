import {
  NavigationList,
  NavigationLink,
} from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <NavigationList>
      <li>
        <NavigationLink to="/register">Register</NavigationLink>
      </li>

      <li>
        <NavigationLink to="/login">Login</NavigationLink>
      </li>
    </NavigationList>
  );
};
