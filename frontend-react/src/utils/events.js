import * as R from "ramda";
import moment from "moment";
import { formatUnits } from "@ethersproject/units";

export const marshalEmployeeAddedEvents = (events) =>
  R.reverse(
    R.map((single) => {
      return {
        address: single.args.employee,
        date: moment.unix(single.args.date.toString()).format("LLL"),
        salary: formatUnits(single.args.salary),
      };
    })(events)
  );

export const marshalEmployeeRemovedEvents = (events) =>
  R.reverse(
    R.map((single) => {
      return {
        address: single.args.employee,
        date: moment.unix(single.args.date.toString()).format("LLL"),
      };
    })(events)
  );
