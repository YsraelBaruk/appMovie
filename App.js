import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Icones
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//Telas
import Movie from "./components/Movie";
import Series from "./components/Series";
import Documentary from "./components/Documentary";
import tv from "./components/tv";

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
              drawerIcon:({size})=>( <MaterialIcons name="movie" size={20} color="white" />),
              
            }}
          />
          <ItensMenu name="Series" component={Series}
            options={{
              drawerIcon:({size})=>(<MaterialCommunityIcons name="netflix" size={24} color="white" />),
              
            }}
          />
          <ItensMenu name="Documentary" component={Documentary}
            options={{
            drawerIcon: ({size})=>(<Ionicons name="md-tv-outline" size={24} color="white" />),
          }}
          />
          <ItensMenu name="TV" component={tv}/>
        </Menu>
    </NavigationContainer>
  );
}