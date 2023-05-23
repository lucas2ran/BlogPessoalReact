import { AppBar, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import ListaPostagens from "../postagens/listapostagens/ListaPostagem";
import React from "react";

function TabPostagens() {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
      setValue(newValue);
    };
    return (
      <div >
        <TabContext value={value}>
          <AppBar position="static">
            <TabList onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Postagens" value="1" />
              <Tab label="Sobre" value="2" />
            </TabList>
          </AppBar>
          <TabPanel value="1"><ListaPostagens /></TabPanel>
          <TabPanel value="2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo esse quo accusamus voluptatum minus repudiandae cupiditate quisquam illo praesentium deserunt asperiores optio explicabo nulla facilis, facere excepturi debitis atque!
          </TabPanel>
          
        </TabContext>
      </div>
    )
  }
  
  export default TabPostagens