for (i = 0; i < 3200; i += 800) {
  setTimeout(() => process.stdout.write('\r|  '), 100 + i);
  setTimeout(() => process.stdout.write('\r/  '), 300 + i);
  setTimeout(() => process.stdout.write('\r-  '), 500 + i);
  setTimeout(() => process.stdout.write('\r\\  '), 700 + i);
}

