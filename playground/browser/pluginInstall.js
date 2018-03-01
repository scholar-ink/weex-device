import Device from "../../js/src";

if (window.Weex) {
  Weex.install(Device);
} else if (window.weex) {
  weex.install(Device);
}