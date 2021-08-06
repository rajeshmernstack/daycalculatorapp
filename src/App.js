import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import './App.css';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <Container maxW="container.lg">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab><span className="iconify" data-icon="mdi-calculator" data-inline="false"></span> Calculator</Tab>
          <Tab><span className="iconify" data-icon="fluent:math-formula-16-filled" data-inline="false"></span> Formula</Tab>
          <Tab><span className="iconify" data-icon="ant-design:api-filled" data-inline="false"></span> API</Tab>
        </TabList>
        <TabPanels>
          <TabPanel style={{textAlign : 'center'}}>
            <Calculator />
          </TabPanel>
          <TabPanel>
            <p>Formula will be Updated Soon!</p>
          </TabPanel>
          <TabPanel>
            <p>APIs will be published publicly soon</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}