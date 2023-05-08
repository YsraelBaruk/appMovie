import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from '@expo/vector-icons';
//createBottomTabsNavigator
import Movie from "./components/Movie";
import Series from "./components/Series";
import Documentary from "./components/Documentary";

const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (
    
    <NavigationContainer>
        <Menu screenOptions={{
          drawerStyle: {
            backgroundColor: "#5f0202b8",
          },
          drawerLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          drawerActiveBackgroundColor: "#db3f2dd1",
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "black",
          drawerLabelPosition: "beside-icon"
        }}
        >
          <ItensMenu name="Movie" component={Movie}
            options={{
              tabBarIcon: <AntDesign name="check" size={10} color='black' />,
              tabBarBadge: 4,
            }}
          />
          <ItensMenu name="Series" component={Series}/>
          <ItensMenu name="Documentary" component={Documentary}/>
        </Menu>
    </NavigationContainer>
  );
}