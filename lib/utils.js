/* global tf */

function log(text, outputId = "console") {
  var output = document.querySelector("#" + outputId);

  if (text instanceof Object) {
    text = JSON.stringify(text, null, 2);
  }

  if (text !== "") output.value += text + "\n";
}

function clearLog(outputId = "console") {
  var output = document.querySelector("#" + outputId);
  output.value = "";
}

function getInput(id) {
  var input = document.querySelector("#" + id);
  return input.value;
}

async function initDevices() {
  var devices = [];

  return new Promise((resolve, reject) => {
    tf.setConnectCallback(callback);
    tf.initialize();
    log("Waiting for devices to connect...");

    setTimeout(() => {
      resolve(devices);
    }, 500);
  });

  function callback(device) {
    log(
      "Found >" +
        device.deviceName +
        "< (UID: " +
        device.uid +
        " / Type: " +
        device.deviceIdentifier +
        ")"
    );
    devices.push(device);
  }
}

async function getDeviceById(uid) {
  var device = await tf.deviceManager.getDeviceByUid(uid);
  return device;
}

async function getDeviceByIdentifier(type) {
  var device = await tf.deviceManager.getDeviceByIdentifier(type);
  return device;
}

function getValue(valObject, type = null) {
  if (!valObject.values) {
    console.error("No values found at all");
    return {};
  }

  if (type == null) {
    return {
      value: valObject.values[0].value,
      type: valObject.values[0].type
    };
  } else {
    console.dir(valObject.values);
    for (var i = 0; i < valObject.values.length; i++) {
      if (valObject.values[i].type === type) {
        return {
          value: valObject.values[i].value,
          type: valObject.values[i].type
        };
      }
    }
  }

  console.error("No values for >" + type + " found.");
  return {};
}
