import { DataTable } from "react-native-paper";
import { View, Text, StyleSheet, Image } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const Table = () => {
  return (
    <DataTable style={{ backgroundColor: "white" }}>
      <DataTable.Header
        style={styles.tableHeaderStyle}
      >
        <DataTable.Title>PRIZE POOL</DataTable.Title>
        <DataTable.Title>UNDER</DataTable.Title>
        <DataTable.Title>OVER</DataTable.Title>
        <DataTable.Title>ENTRY FEES</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row
        style={styles.tableRow}
      >
        <DataTable.Cell
          style={styles.tableRowValues}
        >
          $12,000
        </DataTable.Cell>
        <DataTable.Cell
          style={styles.tableRowValues}
        >
          3.25x
        </DataTable.Cell>
        <DataTable.Cell
         style={styles.tableRowValues}
        >
          1.25x
        </DataTable.Cell>
        <DataTable.Cell
          style={{
            textAlign: "right",
            fontFamily: "Avenir-SemiBold",
            fontWeight: "600",
            fontSize: 14,
            marginRight: -80,
          }}
        >
          5 <Ionicons name="ellipse" color={"#FFD600"}></Ionicons>
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default Table;

const styles = StyleSheet.create({
    tableHeaderStyle:{
        color: "#B5C0C8",
        fontFamily: "Montserrat-Light",
        fontWeight: "500",
        fontSize: 12,
      },
      tableRow:{
        marginTop: 0,
        marginBottom: 0,
        textAlign: "right",
        fontFamily: "Avenir-SemiBold",
        fontWeight: "600",
        fontSize: 14,
      },
      tableRowValues:{
        textAlign: "right",
        fontFamily: "Avenir-SemiBold",
        fontWeight: "600",
        fontSize: 14,
      }
})
