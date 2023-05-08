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
          tabBarStyle: {
            backgroundColor: "#ccc"              
          },
          tabBarLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveTintColor: "#555",
          tabBarActiveTintColor: "#222",
          tabBarLabelPosition: "beside-icon"
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