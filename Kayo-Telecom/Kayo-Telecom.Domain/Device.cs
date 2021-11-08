using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Kayo_Telecom.Domain
{
    public class Device
    {
        public int Id { get; set; }
        public int SubscriptionId { get; set; }
        [JsonIgnore]
        public Subscription Subscription { get; set; }
        public string DeviceHolder { get; set; }
        public string DeviceName { get; set; }
        public string PhoneNumber { get; set; }

    }
}
