// Geocoder
export * as Geocoder from "./lib/geocoder/geocoder_pb.ts";

// ML
import * as Translation from "./lib/ml/translation_pb.ts";
export const ML = {
  Translation,
};

// Peering
export * as Peering from "./lib/peering/peering_pb.ts";

// Plugin
export * as MosaicPlugin from "./lib/plugin/mosaic_pb.ts";
export * as Plugin from "./lib/plugin/plugin_pb.ts";

// service
import * as GeoData from "./lib/service/geodata_pb.ts";
import * as Heartbeat from "./lib/service/heartbeat_pb.ts";
import * as PluginService from "./lib/service/plugin_pb.ts";
import * as System from "./lib/service/system_pb.ts";
export const Service = {
  GeoData,
  Heartbeat,
  Plugin: PluginService,
  System,
};
