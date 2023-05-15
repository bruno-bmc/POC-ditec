import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {

  const formulario = {
    "nome": "Teste 03/05",
    "descricao": "Teste 03/05",
    "categoria": "2502",
    "uuidAplicativo": "",
    "paginas": [
        {
            "nome": "Principal",
            "tipo": "Form",
            "propriedades": {},
            "secoes": [
                {
                    "uuid": "a365274a-afee-4a4e-8820-8d7fffcd05cd",
                    "descricao": "Primeira questão",
                    "componentes": [
                        {
                            "name": "Placa",
                            "uuid": "ed287d93-9629-44ce-9ea6-732eefe4208a",
                            "tipo": "Input",
                            "placeholder": "Placa",
                            "variante": "Input",
                            "obrigatorio": true,
                            "ordem": 0
                        },
                        {
                            "name": "Municipio Placa",
                            "uuid": "7d86e49e-58fe-47e6-a56d-462e1d389938",
                            "tipo": "Input",
                            "placeholder": "Municipio",
                            "variante": "Input",
                            "obrigatorio": false,
                            "ordem": 1
                        },
                        {
                            "name": "Potencia do radio do carro",
                            "uuid": "4cd2b292-ccb6-4a07-b1e6-02ecd963b43b",
                            "tipo": "Input",
                            "placeholder": "Potencia",
                            "variante": "Input",
                            "obrigatorio": false,
                            "ordem": 1
                        }
                    ],
                    "ordem": 0
                }
            ],
            "codigo": "a89089e3-3b00-458b-a2df-4cd7fe073163"
        }
    ],
    "tiposDados": [],
    "listasValores": []
};

const componente = [
  {
    "Placa": "VALOR",
    "Municipio Placa": "GUAIRA",
    "Marca Modelo": "SR/NOMA SR2E18RT1 CG",
    "Ano Fabricacao": "2001",
    "Ano Modelo": "2002",
    "Chassi": "9EP07102021000339",
    "Numero Motor": "",
    "Numero Caixa Cambio": "",
    "Numero Carroceria": "",
    "Quantidade Eixo": "2",
    "Numero Eixo Auxiliar": "",
    "Numero Eixo Traseiro": "200110N21296",
    "Combustivel": "",
    "Cor": "AZUL",
    "Especie": "CARGA",
    "Tipo Veiculo": "SEMI-REBOQUE",
    "Proprietario": "Tipo Documento: CPF---Número Documento: 01236547896---Nome Proprietário: JOSE COUVES---Endereço: PR - GUAIRA - RUA DESEMBARGADOR ANTONIO F DA COSTA, 120 CASA",
    "Renavam": "769674976",
    "Restricao": "",
    "Restricao Veiculo1": "RESTRICAO JUDICIAL",
    "Restricao Veiculo2": "",
    "Restricao Veiculo3": "",
    "Restricao Veiculo4": "",
    "Situacao Veiculo": "EM CIRCULACAO",
    "Id": 719350,
    "Data Emplacamento": "2001-11-13T00:00:00",
    "Tipo Documento Faturado": "CNPJ",
    "Numero Identificacao Faturado": "79131918000120",
    "Uf Fatura": "PARANA",
    "Tipo Documento Proprietario": "CPF",
    "Uf Emplacamento": "PR",
    "Grupo Veiculo": "CAMINHOES",
    "Carroceria": "CARROCERIA ABERTA",
    "Potencia": "",
    "Cilindrada": "",
    "Lotacao": "",
    "Capacidade Maxima Carga": "01800",
    "Peso Bruto Total": "02400",
    "Capacidade Maxima Tracao": "00000",
    "Indicador Remarcacao Chassi": "0",
    "Tipo Montagem": "MONTAGEM ACABADA",
    "Numero Identificacao Importador": "",
    "Numero Declaracao Importacao": "",
    "Data Declaracao Importacao": "1900-01-01T00:00:00",
    "Codigo Orgao Srf": "",
    "Data Atualizacao Veiculo": "2019-09-13T00:00:00.000+0000",
    "Data Limite Restricao Tributaria": "1900-01-01",
    "Codigo Municipio Emplacamento": "7571",
    "Data Atualizacao Roubo Furto": "2022-06-21",
    "Data Atualizacao Alarme": "2022-06-22",
    "Indicador Veiculo Nacional": true,
    "Numero Licenca Uso Configuracao Veiculos Motor": "",
    "Nome Arrendatario": " ",
    "Categoria": "ALUGUEL",
    "Codigo Categoria": 2,
    "Data Emissao Ultimo Crv": "2011-08-16",
    "Data Hora Atualizacao Veiculo": "2019-09-13T23:44:44",
    "Numero Processo Importacao": "",
    "Pais Transferencia Veiculo": "",
    "Nome Possuidor": "JOSE COUVES",
    "Origem Possuidor": "CARTORIO",
    "Nome Proprietario": "JOSE COUVES",
    "Quaantidade Restricoes Base Emplacamento": "2",
    "Registro Aduaneiro": "",
    "Codigo Marca Modelo": 629912,
    "Codigo Especie": 2,
    "Codigo Tipo Veiculo": 11,
    "Codigo Cor": 2,
    "Possuidor": "Tipo Documento: CPF---Número Documento: 01236547896---Nome Proprietário: JOSE COUVES---Endereço: PR - GUAIRA - RUA DESEMBARGADOR ANTONIO F DA COSTA, 120 CASA",
    "Arrendatario": "Tipo Documento: ---Número Documento: ---Nome Proprietário: ---Nome Proprietário: ---Endereço Arrendatario: ",
    "Historico Restricao": ""
  }
];

const resposta = {
	"b63b3227-d818-45a5-a9d7-d226ce515fd4": {
		"1beabf55-bca4-404f-a4a2-0dee41d80db4": {
      "name": "Placa",
			"dado": "",
			"tipo": "Radio"
		}
	},
	"b9b99434-3aba-44a6-b707-e9f32aabb9c7": {
		"ffc5bc1a-2de3-4c71-b142-f8aff5d5771c": {
      "name": "Municipio Placa",
			"dado": "",
			"tipo": "Radio"
		}
	},
	"c562e9f1-d085-45cb-b140-3d4f7086c1cf": {
		"27a151b1-8e4d-441a-a56f-d4d0f2289913": {
      "name": "Potencia do radio do carro",
			"dado": "",
			"tipo": "Group"
		}
	},
};

var componenteKeys = Object.keys(componente[0]);

var componenteValues = Object.values(componente[0]);

var formularioValues = [];

var respostaValues = [];

for (let i = 0; i < formulario.paginas.length; i++) {
  for (let j = 0; j < formulario.paginas[i].secoes.length; j++) {
    for (let k = 0; k < formulario.paginas[i].secoes[j].componentes.length; k++) {
     var umComponente = formulario.paginas[i].secoes[j].componentes[k];
     formularioValues.push(umComponente.name); 
    
    }
  }
}

for (let i = 0; i < formularioValues.length; i++) {
  for (let j = 0; j < componenteKeys.length; j++) {
    if (formularioValues[i] === componenteKeys[j]) {
      respostaValues.push(componenteValues[j]);
    }
  }
}

  return (
    <View style={styles.container}>

      <TextInput
        style = {styles.input}
        value = {respostaValues[0]}
        // onChangeText = {(cilindradas) => setCilindradas(cilindradas)}
        placeholder = "Placa"
      />
      <TextInput
        style = {styles.input}
        value = {respostaValues[1]}
        // onChangeText = {(cilindradas) => setCilindradas(cilindradas)}
        placeholder = "Municipio Placa"
      />
      <TextInput
        style = {styles.input}
        value = {respostaValues[2]}
        // onChangeText = {(cilindradas) => setCilindradas(cilindradas)}
        placeholder = "Potencia do radio do carro"
      />
      <Text>
        {/* Resposta values: {JSON.stringify(respostaValues)} */}
        {/* Formulario values: {JSON.stringify(formularioValues)} */}
      </Text>
      {/* <Button
        onPress={() => Alert.alert('Preenchido')}
        title="Preenche"
        color="#841584"
        accessibilityLabel="Preenche Formulario"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    margin: 20,
    padding: 5
  }
});
