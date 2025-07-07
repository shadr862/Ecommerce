﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace Acme.Ecommerce.Users
{
    public class UserListRequestDto : PagedAndSortedResultRequestDto
    {
        public UserListRequestDto()
        {
            MaxResultCount = 100;
        }
    }
}
