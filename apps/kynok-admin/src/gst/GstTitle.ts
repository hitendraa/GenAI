import { Gst as TGst } from "../api/gst/Gst";

export const GST_TITLE_FIELD = "typeField";

export const GstTitle = (record: TGst): string => {
  return record.typeField?.toString() || String(record.id);
};
