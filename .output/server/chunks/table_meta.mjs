import { d as defineEventHandler, s as setResponseStatus } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const table_meta = defineEventHandler((event) => {
  if (event.req.method === "POST") {
    const data = {
      "tableName": "\u6D4B\u8BD5\u8FDE\u63A5\u5668\u63D2\u4EF6",
      "fields": [
        {
          "fieldId": "fid_1",
          "fieldName": "id1",
          "fieldType": 1,
          "isPrimary": true,
          "description": ""
        },
        {
          "fieldId": "fid_2",
          "fieldName": "\u6570\u5B57",
          "fieldType": 2,
          "isPrimary": false,
          "property": {
            "formatter": "#,##0.00"
          }
        },
        {
          "fieldId": "fid_3",
          "fieldName": "\u5355\u9009",
          "fieldType": 3,
          "isPrimary": false,
          "description": "xxx",
          "property": {}
        },
        {
          "fieldId": "fid_4",
          "fieldName": "\u591A\u9009",
          "fieldType": 4,
          "isPrimary": false,
          "description": "xxx",
          "property": {}
        },
        {
          "fieldId": "fid_5",
          "fieldName": "\u65E5\u671F",
          "fieldType": 5,
          "isPrimary": false,
          "description": "xxx",
          "property": {
            "formatter": "dd/MM/yyyy"
          }
        },
        {
          "fieldId": "fid_6",
          "fieldName": "\u6761\u5F62\u7801",
          "fieldType": 6,
          "isPrimary": false,
          "description": "xxx",
          "property": {}
        },
        {
          "fieldId": "fid_7",
          "fieldName": "\u590D\u9009\u6846",
          "fieldType": 7,
          "isPrimary": false,
          "description": "xxx",
          "property": {}
        },
        {
          "fieldId": "fid_8",
          "fieldName": "\u8D27\u5E01",
          "fieldType": 8,
          "isPrimary": false,
          "description": "xxx",
          "property": {
            "formatter": "#,##0.000",
            "currencyCode": "USD"
          }
        },
        {
          "fieldId": "fid_11",
          "fieldName": "\u7535\u8BDD",
          "fieldType": 9,
          "isPrimary": false,
          "description": "xxx",
          "property": {}
        },
        {
          "fieldId": "fid_12",
          "fieldName": "url",
          "fieldType": 10,
          "isPrimary": false,
          "description": "xxx",
          "property": {}
        },
        {
          "fieldId": "fid_9",
          "fieldName": "\u8FDB\u5EA6",
          "fieldType": 11,
          "isPrimary": false,
          "description": "xxx",
          "property": {
            "formatter": "0.0%",
            "min": 10,
            "max": 1e3,
            "color": 4
          }
        },
        {
          "fieldId": "fid_10",
          "fieldName": "\u8BC4\u5206",
          "fieldType": 12,
          "isPrimary": false,
          "description": "xxx",
          "property": {
            "min": 1,
            "max": 10,
            "symbol": "smile"
          }
        },
        {
          "fieldId": "fid_14",
          "fieldName": "\u7528\u6237",
          "fieldType": 14,
          "isPrimary": false,
          "description": "xxx"
        }
      ]
    };
    setResponseStatus(event, 200);
    return {
      code: 200,
      msg: "",
      data
    };
  }
});

export { table_meta as default };
//# sourceMappingURL=table_meta.mjs.map
