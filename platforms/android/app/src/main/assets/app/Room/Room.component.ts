import viewModel = require("./Room-view-model");
import { Component } from "@angular/core";

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.RoomViewModel();
}
