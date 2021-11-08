using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Kayo_Telecom.Domain
{
    public class Subscription
    {
        public int Id { get; set; }
        [JsonIgnore]
        public Plan Plan { get; set; }
        public int PlanId { get; set; }
        [JsonIgnore]
        public User User { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]

        public ICollection<Device> Devices { get; set; }
    }
}
