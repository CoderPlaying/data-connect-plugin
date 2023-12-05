import { d as defineEventHandler, s as setResponseStatus } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const records = defineEventHandler((event) => {
  if (event.req.method === "POST") {
    const result = {
      "nextPageToken": "xxx",
      "hasMore": false,
      "records": [
        {
          "primaryId": "record_1",
          "data": {
            "fid_1": "xxx",
            "fid_2": 1343,
            "fid_3": "a",
            "fid_5": 1697994894e3,
            "fid_8": 1343.343443,
            "fid_9": 40,
            "fid_10": 3,
            "fid_14": {
              "ids": [
                "6983855737910886401"
              ],
              "idType": "UserLarkID"
            },
            "fid_15": {
              "ids": [
                "Wz0ob1A0jodZ1axAe1Obo7gvcRd"
              ],
              "idType": "DriveFile"
            },
            "fid_16": {
              "ids": [
                "7251866351663317012",
                "7271479319895998483"
              ],
              "idType": "ChatLarkID"
            },
            "fid_17": {
              "latitude": 39.903179,
              "longitude": 116.397755
            }
          }
        },
        {
          "primaryId": "record_2",
          "data": {
            "fid_1": "yyy",
            "fid_2": 222.33344,
            "fid_3": "b",
            "fid_4": ["b", "c"],
            "fid_5": 1699999994e3,
            "fid_6": "xxx",
            "fid_7": true,
            "fid_8": 1343,
            "fid_9": 80,
            "fid_10": 8,
            "fid_14": {
              "ids": [
                "6921583492111269907",
                "7171043992061083667"
              ],
              "idType": "UserLarkID"
            },
            "fid_15": {
              "ids": [
                "QPlEbvok0o8wTSxBAhGbkz2Ocgd",
                "NjvCbpB1OoHb6sxSJhKbJ4nHcGl",
                "SFAEbiE0Jo7wDRxres8bqlTwczh"
              ],
              "idType": "DriveFile"
            },
            "fid_16": {
              "ids": [
                "7251866351663317012"
              ],
              "idType": "ChatLarkID"
            }
          }
        },
        {
          "primaryId": "record_3",
          "data": {
            "fid_1": "yyy",
            "fid_2": 222.33344,
            "fid_3": "b",
            "fid_5": 1699999994e3,
            "fid_8": 1343,
            "fid_9": 80,
            "fid_10": 8,
            "fid_14": {
              "ids": [
                "6921583492111269907",
                "7171043992061083667"
              ],
              "idType": "UserLarkID"
            },
            "fid_15": {
              "ids": [
                "QPlEbvok0o8wTSxBAhGbkz2Ocgd",
                "NjvCbpB1OoHb6sxSJhKbJ4nHcGl",
                "SFAEbiE0Jo7wDRxres8bqlTwczh"
              ],
              "idType": "DriveFile"
            },
            "fid_16": {
              "ids": [
                "7251866351663317012"
              ],
              "idType": "ChatLarkID"
            }
          }
        }
      ]
    };
    setResponseStatus(event, 200);
    return {
      code: 200,
      msg: "",
      data: result
    };
  }
});

export { records as default };
//# sourceMappingURL=records.mjs.map
